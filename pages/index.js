import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <div>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Todo List Next.Js
        </h1>
        <TodoList />
      </div>
    </div>
  )
}
