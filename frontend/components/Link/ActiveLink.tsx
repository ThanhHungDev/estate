import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link, { LinkProps } from 'next/link'
import React, { Children } from 'react'


export interface NavLinkProps extends LinkProps {
    children: React.ReactElement,
    activeClassName: String | null
}

const ActiveLink = ({ activeClassName, children, href, ...props }: NavLinkProps) => {
    const { asPath } = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''
    if (!activeClassName) activeClassName = 'active'

    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    const className = asPath === href || asPath === props.as
        ? `${childClassName} ${activeClassName}`.trim()
        : childClassName

    return (
        <Link {...props} href={href}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    )
}

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink




// https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
// import ActiveLink from './ActiveLink'

// const Nav = () => (
//   <nav>
//     <style jsx>{`
//       .nav-link {
//         text-decoration: none;
//       }
//       .active:after {
//         content: ' (current page)';
//       }
//     `}</style>
//     <ul className="nav">
//       <li>
//         <ActiveLink activeClassName="active" href="/">
//           <a className="nav-link">Home</a>
//         </ActiveLink>
//       </li>
//       <li>
//         <ActiveLink activeClassName="active" href="/about">
//           <a className="nav-link">About</a>
//         </ActiveLink>
//       </li>
//       <li>
//         <ActiveLink activeClassName="active" href="/[slug]" as="/dynamic-route">
//           <a className="nav-link">Dynamic Route</a>
//         </ActiveLink>
//       </li>
//     </ul>
//   </nav>
// )

// export default Nav