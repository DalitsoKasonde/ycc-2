import { Button } from "react-bootstrap"

function Book() {
  return (
    <div className='booking-section'>
      <h3>Make an Appointment</h3>
      <br /> <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nihil molestias architecto veniam voluptas atque, 
        laboriosam ex dolores voluptatem, assumenda, dicta itaque porro illum temporibus numquam quae totam ratione tempore?
      </p>
      <br />
      <br />
      <Button variant="outline-info" className="btn"> BOOK NOW </Button>
    </div>
  )
}

export default Book