import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './CommentSection.css';
class CommentSection extends React.Component{
  render(){
    return(
      <div className="container p-4 shadow-sm">
          {/* <Form>
            <Form.Group>
                <Form.Control className = "input-field w-25 border-light shadow-sm" type="text" placeholder="Add your comment here ..." />

                <Button className = "secondary w-25"  size = "sm" type = "reset">Cancel</Button>
                <Button className = "primary w-25" size = "sm" type = "submit">Comment</Button>
                
              </Form.Group>
          </Form> */}

        <form>
          <div className = "row"> 
            <div className = "form-group col-12">
              <input type = "text" className = "form-control shadow-sm"  placeholder = "Add your comment here ..."  /> 
            </div>
          </div>
          
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
export default CommentSection;