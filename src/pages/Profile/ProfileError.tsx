import { Link, useRouteError } from "react-router-dom"

const ProfileError = () => {
    const error : any = useRouteError()

  return (
    <section>
        <h2>Error</h2>
        <p>{error?.message}</p>
        <Link to='/'>Volver</Link>
    </section>
  )
}

export default ProfileError