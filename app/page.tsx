import { Table } from "./(component)/Table";

export default function Home() {
  return (
    <div className="grid grid-rows-[0px_1fr_20px] items-start justify-items-center min-h-screen px-8 pb-20 sm:p-20 font-notosanstc">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Table />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
