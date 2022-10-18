import GoogleLogin from 'react-google-login';
import Button from '../ui/Button';
import { Context } from '../../Contexts/userContext';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

export default function GoogleOAuth({ ...props }) {
  const user = useContext(Context);
  const history = useHistory();
  const clientId= '968807371902-p7ap9mm33obhcfdetb7i84rr6oklo1ou.apps.googleusercontent.com';

  useEffect(() => {
    gapi.load("client:auth2",()=>{
      gapi.auth2.init({clientId:clientId})
    })
   
  }, [])
  


  const SuccessLoginHandler = (res) => {
    localStorage.setItem('googleLogin', JSON.stringify(res.profileObj));
    const profile = { ...res.profileObj };
    console.log(profile);
    user.Login(profile);
    history.push('/dashboard');
  };
  const FailureLoginHandler = (err) => {
    console.log(err);
  };
  return (
    <div {...props}>
      <GoogleLogin
        clientId={clientId}

        // clientId= '17859477427-dejs6iqogl23lfhhv4s6ra75v2o8e9sn.apps.googleusercontent.com'
        buttonText='Sign In Using Google'
        render={(renderProps) => {
          return (
            <Button onClick={renderProps.onClick} btnType='primary' {...props}>
              Sign In Using Google
            </Button>
          );
        }}
        onSuccess={SuccessLoginHandler}
        onFailure={FailureLoginHandler}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}
