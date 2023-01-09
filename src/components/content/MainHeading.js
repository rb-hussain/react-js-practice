import Button from 'react-bootstrap/Button';
export default function MainHeading(props){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center"> 
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
        </>
    );
}