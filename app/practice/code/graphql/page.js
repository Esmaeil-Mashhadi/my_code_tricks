'use client'
import { gql , useMutation, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query getUser($id : ID!) {
    user(id : $id) {
        name    
    }
  }
`;

const CREATE_USER = gql`
mutation {
  createUser(input: {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com"
  }) {
    name
    username
  }
}
`

const GraphPage = () => {
    // console.log(useQuery(GET_USERS , {variables: {id : "1"}})); 

  const [sendHanlder,{data , loading , error}] = useMutation(CREATE_USER)
     
    console.log(loading , data , error);
    return (
        <div>
            <button onClick={sendHanlder}>Sending Test</button>
        </div>
    );
};

export default GraphPage;