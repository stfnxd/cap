import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { RiUser3Fill } from "react-icons/ri";
import moment from "moment";

const monthAndYear = (date) =>
  `${moment(date).format("MMMM").slice(0, 3)} ${moment(date).format("YYYY")}`;

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  const getUser = async () => {
    const docSnap = await getDoc(doc(db, "users", id));
    if (docSnap.exists()) {
      setUser(docSnap.data());
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);
  return user ? (
    <div className="mt-5 container row">
      <div className="text-center col-sm-2 col-md-3">
      <RiUser3Fill size={50} />
      <h3 className="text-capitalize" >{user.name}</h3>
      
        <p>Joined {monthAndYear(user.createdAt.toDate())}</p>
      </div>


    </div>
  ) : null;
};

export default Profile;

