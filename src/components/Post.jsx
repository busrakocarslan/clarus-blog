import React from 'react'
import Card from 'react-bootstrap/Card';


const Post = ({posts,loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

  return (
    <div>
        {
            posts.map(({id,body,title})=>(
                <Card style={{ width: '18rem' }} key={id}>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
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

