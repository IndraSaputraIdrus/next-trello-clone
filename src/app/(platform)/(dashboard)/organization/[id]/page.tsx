import Container from "@/components/container"
import { CreateBoardForm } from "@/components/dashboard/create-board-form"
import { db } from "@/lib/db"

const getBoard = async () => {
  return db.query.board.findMany()
}

const OrganizationIdPage = async () => {

  const boards = await getBoard()

  return (
    <Container>
      <CreateBoardForm />
      <div>
        {boards.map(board => (
          <div>{board.title}</div>
        ))}
      </div>
    </Container>
  )
}

export default OrganizationIdPage
