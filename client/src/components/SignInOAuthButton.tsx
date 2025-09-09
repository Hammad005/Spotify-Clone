import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInOAuthButton = () => {
    const {signIn, isLoaded} = useSignIn();

    if (!isLoaded) {
        return null;
    }
    const oAuth = async () => {
        signIn.authenticateWithRedirect({
            strategy: 'oauth_google',
            redirectUrl: `/sso-callback`,
            redirectUrlComplete: `/auth-callback`,
        });
    }
  return (
    <Button onClick={oAuth} variant={'secondary'} className="w-full text-white border-zinc-200 h-11 cursor-pointer">
        <img src="/public/googleLogo.png" alt="google" className="w-4 h-4" />
        Continue with Google
    </Button>
  )
}

export default SignInOAuthButton