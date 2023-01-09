import styles from '../../styles/Home.module.css';

export default function SocialSignin() {
  return (
    <div style={{ marginTop: '50px' }}>
      <div className={styles.text}>or</div>
      <hr />
      <div className={styles.text2}>Sign In with your social account</div>
      <div
        className={styles.googleBtn}
        onClick={() => {
          window.open(
            'https://simpleapptest.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=https://cm-custom-ui.vercel.app/success&response_type=CODE&client_id=tll59p88np9bvv6vrtk5d0erb&scope=aws.cognito.signin.user.admin email openid phone profile',
          );
        }}>
        Google
      </div>
      <div className={styles.text}>
        We wont post to any of your accounts without asking first
      </div>
    </div>
  );
}
