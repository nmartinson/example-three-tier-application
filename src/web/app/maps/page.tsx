import { getStates } from './actions';
import StateMap from './StateMap';
import Link from 'next/link';

export default async function MapsPage() {
  const states = await getStates();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            US State Maps
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Interactive maps for all 50 US states
          </p>
          <Link
            href="/"
            className="inline-block text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            ← Back to To-Do List
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {states.map((state) => (
            <div
              key={state.id}
              className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-700">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {state.name}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {state.abbreviation}
                </p>
              </div>
              <div className="p-4">
                <StateMap state={state} />
              </div>
            </div>
          ))}
        </div>

        {states.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400 text-lg">No states found. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
