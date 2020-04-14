import { version } from "react"
import { MemoryRouter } from "react-router-dom"
import { selectCartItems } from "./src/components/redux/cart/cart-selector"
import { ServerStyleSheet } from "styled-components"
import Homepage from "./src/pages/homepage/homepage.component"
https://crown-clothing-gt.herokuapp.com/

sesion 14, heroku 
{
    heroku --versionh
    heroku login 
    heroku create crown-clothing-gt --buildpack https://github.com/mars/create-react-app-buildpack
    git push heroku master
}
session 22, deploy code to production
{
    heroku apps => list all apps 
    heroku git:remote -a chrow-live 
    git remote 
    heroku buildpacks 
    heroku buildpacks:remove xxxx/xxxxx
    

    git add -A 
    git commit -m ""
    git push heroku master


    how to add security key to heroku
    heroku config:set STRIPE_SECRET_KEY=xxxxx
}
section 26 performance 
{
    1, use Lazy & Suspense in React 
    2, use Memo, => first time mount the class with Memo, it's longer than normal class , 
    3, Memo for function, if you have no props or state, then don't need to memo then function, 
    4, PureComponent, ShouldComponentUpate
    5, useCallback => useCallback(()=>{}, [dependency]) => for cache function only 
    6, useMemo => for cache value only 
       useMemo(()=>{ return count+123;}, [count1])
    7, install compression => check Server.js  how to use Gzipping
    8, Profiler in react => Homepage.component.jsx for example 
}