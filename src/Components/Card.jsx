const todoTitle = "Todo Title";
const todoDescription = "Lorem Ipsum dior to do description will be goes in hre";
const todoDate = new Date().toLocaleDateString();

const headingStyle = {
  color: "white", 
  fontSize : "3rem", 
  background:"purple", 
  textAlign:"center", 
  padding:"15px"
}

function Card(){
    return(
        
            <div className="card text-dark bg-warning mb-3">
            <div className="card-header"></div>
            <div className="card-body">
                <h5 className="card-title">{todoTitle}</h5>
                <p claclassNamess="card-text">{todoDescription}</p>
            </div>
            <div className='card-footer'>{todoDate}</div>
            </div>    
        
    );
}

export default Card;