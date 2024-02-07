"use client"

export default function Home() {
  const makeApiCall = async () => {
    await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({ hello: "World" })
    })
  }

  const makeNewApiCall = async () => {
    await fetch('/api/example', {
      method: 'POST',
      body: JSON.stringify({ hello: "World" })
    })
  }

  return (
    <div className="flex flex-col m-4">
      <button className="bg-gray-500 rounded-md w-52 p-2 h-20 mb-8" onClick={makeApiCall}>make new api call</button>
      <button className="bg-gray-500 rounded-md w-52 p-2 h-20 mb-8" onClick={makeNewApiCall}>make example api call</button>
    </div>
  );
}
