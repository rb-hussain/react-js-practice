import { Button } from "react-bootstrap";
import DeleteUser from "./DeleteUser";
import {fakeUser} from "../../api"
import Chance from "chance";
import { useDispatch } from "react-redux";
import {addUser} from "../store/UserdataSlice";
import DisplayUser from "./DisplayUser";
const UserTable = () =>{
const dispatch = useDispatch();

        // const chance = Chance();
        //  const fakeUser = () =>{
        //  console.log (chance.name({ middle: true }));
        // return chance.name({ middle: true });
        // };

const addNewUser = (payload) => {
    console.log(payload)    
    dispatch(addUser(payload));
};

return (
<>
<div className="container flex justify-content-center">
    
        <h1> List Of Users</h1>
        <Button onClick={ () => {addNewUser(fakeUser())} } > Add User:</Button>
        <ul>
        <DisplayUser />
        </ul>
        <hr/>   
        <DeleteUser/>
</div>
</>
)};

export default UserTable;