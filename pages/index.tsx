import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useUserContext } from "../context/UserContext";
import { UserData } from "../types";

const Home: NextPage = () => {
  const [users, setUsers] = useState<UserData[]>([])
  const router = useRouter()

  const {
    userLogin,
    setUserLogin,
  } = useUserContext()

  useEffect(() => {
    fetch('http://localhost:3000/api/users', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data)
        setUsers(data.data)
      })
      .catch((error) => {
        console.log(error.message)
      })

  }, [])


  const handleLogin = (user: UserData) => {
    setUserLogin(user)

  }

  const handleGoToShopBtn = () => {
    router.push("/products")
  }


  return (
    <>
      {userLogin == undefined ?
        <div className="login-wrapper">
          <section className="user-selection">
            <h1>Pick user to Login</h1>
            <ul className="user-list">
              {users.map((user, index) => (
                <li className="user-list-item" key={index}>
                  <div>
                    <span>{user.nickname}</span>
                    <span>{user.email}</span>
                  </div>
                  <Button text="Login" onClick={() => handleLogin(user)} />
                </li>
              ))}
            </ul>
          </section>
        </div> : <div className="login-wrapper">
          <h2>welcome user: {userLogin.nickname}</h2>
          <Button text="Visit the shop here" onClick={handleGoToShopBtn} />
        </div>}

    </>
  )
};

export default Home;
