import React from 'react'
import Card from 'react-bootstrap/Card';
import { CgCloseO } from "react-icons/cg";


const Post = ({posts,loading,handleClean}) => {
  
    if(loading){
        return <h2>Loading...</h2>
    }

  return (
    <div className='d-flex justify-content-center flex-wrap text-start mb-5 '>
        {
            posts.map(({id,body,title})=>(
                <Card style={{ width: '18rem', margin:"1rem" }} key={id}>
                <Card.Body>
                  <Card.Title className='d-flex justify-content-between align-items-start'>{title} 
                  <span type="button" onClick={()=>handleClean(id)}>✖️</span>
                  </Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                  
                  <Card.Text>
                  {body}
                  </Card.Text>                  
                </Card.Body>
              </Card>

            ))
        }
     
        
    </div>
  )
}

export default Post;

