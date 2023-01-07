import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
// import style from './style.css';

export default function Login() {
  const router = useRouter();
  const login = () => {
    var form = document.getElementById('myForm');
    form.onsubmit = function (event) {
      var xhr = new XMLHttpRequest();
      var formData = new FormData(form);
      //open the request
      xhr.open(
        'POST',
        'https://nest-aws-cognito.herokuapp.com/auth/authenticate',
        true,
      );
      xhr.setRequestHeader('Content-Type', 'application/json');
      //send the form data
      xhr.send(JSON.stringify(Object.fromEntries(formData)));
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          form.reset(); //reset form after AJAX success or do something else
          console.log(xhr.status, xhr.statusText);
          if (xhr.status === 201) {
            router.push('/success');
          } else {
            alert('Login failed');
          }
        }
      };
      //Fail the onsubmit to avoid page refresh.
      return false;
    };
  };

  // const postRequest = async (url, data) => {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     credentials: 'same-origin',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     redirect: 'follow',
  //     referrerPolicy: 'no-referrer',
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>CMID</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cooler Master CMID</h1>
        <div className={styles.appwrap}>
          <h1>Login</h1>
          <form id="myForm">
            <div>
              <input
                type="text"
                placeholder="Enter username"
                name="name"
                className={styles.input}
              />
            </div>
            <div>
              <input type="password" name="password" className={styles.input} />
            </div>
            <button className={styles.loginBtn} onClick={() => login()}>
              Login
            </button>

            <div style={{ marginTop: '50px' }}>
              <div className={styles.text}>or</div>
              <hr />
              <div className={styles.text2}>
                Sign In with your social account
              </div>
              <div
                className={styles.googleBtn}
                onClick={() => {
                  window.open(
                    'https://simpleapptest.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=http://localhost:3000&response_type=CODE&client_id=tll59p88np9bvv6vrtk5d0erb&scope=aws.cognito.signin.user.admin email openid phone profile',
                  );
                }}>
                Google
              </div>
              <div className={styles.text}>
                We wont post to any of your accounts without asking first
              </div>
            </div>
          </form>
          <a href="/register" className={styles.register}>
            Register
          </a>
        </div>
      </main>
    </div>
  );
}
