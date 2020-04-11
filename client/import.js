import { version } from "react"
https://crown-clothing-gt.herokuapp.com/

sesion 14, heroku 
{
    heroku --versionh
    heroku login 
    heroku create crown-clothing-gt --buildpack https://github.com/mars/create-react-app-buildpack
    heroku push heroku master
}
session 22, deploy code to production
{
    heroku apps => list all apps 
    heroku git:remote -a chrow-live 
    git remote 
    heroku buildpacks 
    heroku buildpacks:remove xxxx/xxxxx
    
    how to add security key to heroku
    herolu config:set STRIPE_SECRET_KEY=xxxxx
}