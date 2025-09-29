import type { Metadata } from "next";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

import { ensureAdmin } from "@/auth/utils";
import { PageContent, PageTitle } from "@/components/ui";
import { db } from "@/drizzle/db";
import { activityLogs } from "@/drizzle/schema";
import type { ActivityLog } from "@/drizzle/schema";
import { getAlbumPath, getShowPath, getSongPath } from "@/utils";
import { getPerformancePath } from "@/dbUtils";

export const metadata: Metadata = {
  title: "Activity Log",
  description: "View recent activity on Live Gizz Rankings.",
};

async function getEntityInfo(entityType: string, entityId: string) {
  try {
    switch (entityType) {
      case "album": {
        const album = await db.query.albums.findFirst({
          where: (albums, { eq }) => eq(albums.id, entityId),
        });
        if (album) {
          return {
            name: album.title,
            path: getAlbumPath(album),
          };
        }
        break;
      }
      case "song": {
        const song = await db.query.songs.findFirst({
          where: (songs, { eq }) => eq(songs.id, entityId),
        });
        if (song) {
          return {
            name: song.title,
            path: getSongPath(song),
          };
        }
        break;
      }
      case "show": {
        const show = await db.query.shows.findFirst({
          where: (shows, { eq }) => eq(shows.id, entityId),
        });
        if (show) {
          return {
            name: `${show.location} ${new Date(show.date).getFullYear()}`,
            path: getShowPath(show),
          };
        }
        break;
      }
      case "performance": {
        const performance = await db.query.performances.findFirst({
          where: (performances, { eq }) => eq(performances.id, entityId),
          with: {
            song: true,
            show: true,
          },
        });
        if (performance) {
          return {
            name: `${performance.song.title} - ${performance.show.location} ${new Date(performance.show.date).getFullYear()}`,
            path: await getPerformancePath(performance),
          };
        }
        break;
      }
    }
  } catch (error) {
    console.error(`Error fetching entity ${entityType}:${entityId}:`, error);
  }

  return null;
}

async function ActivityLogItem({ log }: { log: ActivityLog }) {
  const actionColors = {
    create: "text-green-600",
    update: "text-blue-600",
    delete: "text-red",
  };

  const entityTypeLabels = {
    album: "Album",
    song: "Song",
    show: "Show",
    performance: "Performance",
  };

  const entityInfo = await getEntityInfo(log.entityType, log.entityId);

  return (
    <div className="border-muted-2 pb-4 not-last:border-b">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span
              className={`font-semibold capitalize ${actionColors[log.action as keyof typeof actionColors]}`}
            >
              {log.action}
            </span>
            <span className="text-muted">
              {
                entityTypeLabels[
                  log.entityType as keyof typeof entityTypeLabels
                ]
              }
            </span>
            {entityInfo ? (
              <Link
                href={entityInfo.path}
                className="text-muted hover:text-foreground font-mono text-sm underline"
              >
                {entityInfo.name}
              </Link>
            ) : (
              <span className="text-muted font-mono text-sm">
                {log.entityId}
              </span>
            )}
          </div>

          <div className="text-muted mt-2 text-sm">
            User: <span className="font-mono">{log.userId}</span>
          </div>
        </div>

        <div className="text-muted flex flex-col items-end">
          <div>{formatDistanceToNow(log.createdAt, { addSuffix: true })}</div>
          <time className="text-sm">{log.createdAt.toLocaleString()}</time>
        </div>
      </div>

      {log.action === "create" && log.entityAfter && (
        <details className="mt-2">
          <summary className="text-muted hover:text-foreground cursor-pointer text-sm">
            View created data
          </summary>
          <pre className="bg-muted-3 mt-2 overflow-x-auto rounded p-2 text-xs">
            {JSON.stringify(log.entityAfter, null, 2)}
          </pre>
        </details>
      )}

      {log.action === "update" && log.entityBefore && log.entityAfter && (
        <details className="mt-2">
          <summary className="text-muted hover:text-foreground cursor-pointer text-sm">
            View changes
          </summary>
          <div className="mt-2 space-y-2">
            <div>
              <div className="text-xs font-semibold text-red">Before:</div>
              <pre className="bg-muted-3 overflow-x-auto rounded p-2 text-xs">
                {JSON.stringify(log.entityBefore, null, 2)}
              </pre>
            </div>
            <div>
              <div className="text-xs font-semibold text-green-600">After:</div>
              <pre className="bg-muted-3 overflow-x-auto rounded p-2 text-xs">
                {JSON.stringify(log.entityAfter, null, 2)}
              </pre>
            </div>
          </div>
        </details>
      )}

      {log.action === "delete" && log.entityBefore && (
        <details className="mt-2">
          <summary className="text-muted hover:text-foreground cursor-pointer text-sm">
            View deleted data
          </summary>
          <pre className="bg-muted-3 mt-2 overflow-x-auto rounded p-2 text-xs">
            {JSON.stringify(log.entityBefore, null, 2)}
          </pre>
        </details>
      )}
    </div>
  );
}

export default async function ActivityPage() {
  await ensureAdmin();

  const logs = await db.query.activityLogs.findMany({
    orderBy: desc(activityLogs.createdAt),
    limit: 100,
  });

  return (
    <>
      <PageTitle>Activity Log</PageTitle>

      <PageContent className="space-y-6">
        <p className="text-muted">
          Recent activity (showing last {logs.length} entries)
        </p>

        {logs.length === 0 ? (
          <p className="text-muted">No activity logs found.</p>
        ) : (
          <div className="space-y-4">
            {logs.map((log) => (
              <ActivityLogItem key={log.id} log={log} />
            ))}
          </div>
        )}
      </PageContent>
    </>
  );
}
