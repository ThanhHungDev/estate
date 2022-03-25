import React from 'react'
import * as THEME from "../../constants/theme"
import * as PAGE from "../../constants/page"

const Favicon = () => {
  return <>
    <link rel="icon" type="image/png" href={`/favicon.ico?v=${PAGE.VERSION}`} />
    <link rel="apple-touch-icon" sizes="57x57" href={`/favicon/apple-icon-57x57.png?v=${PAGE.VERSION}`} />
    <link rel="apple-touch-icon" sizes="60x60" href={`/favicon/apple-icon-60x60.png?v=${PAGE.VERSION}`} />
    <link rel="apple-touch-icon" sizes="72x72" href={`/favicon/apple-icon-72x72.png?v=${PAGE.VERSION}`} />
    <link rel="apple-touch-icon" sizes="76x76" href={`/favicon/apple-icon-76x76.png?v=${PAGE.VERSION}`} />
    <link rel="apple-touch-icon" sizes="114x114" href={`/favicon/apple-icon-114x114.png?v=${PAGE.VERSION}`} />
    <link rel="apple-touch-icon" sizes="120x120" href={`/favicon/apple-icon-120x120.png?v=${PAGE.VERSION}`} />
    <link rel="apple-touch-icon" sizes="144x144" href={`/favicon/apple-icon-144x144.png?v=${PAGE.VERSION}`} />
    <link rel="apple-touch-icon" sizes="152x152" href={`/favicon/apple-icon-152x152.png?v=${PAGE.VERSION}`} />
    <link rel="apple-touch-icon" sizes="180x180" href={`/favicon/apple-icon-180x180.png?v=${PAGE.VERSION}`} />
    <link rel="icon" type="image/png" sizes="192x192" href={`/favicon/android-icon-192x192.png?v=${PAGE.VERSION}`} />
    <link rel="icon" type="image/png" sizes="32x32" href={`/favicon/favicon-32x32.png?v=${PAGE.VERSION}`} />
    <link rel="icon" type="image/png" sizes="96x96" href={`/favicon/favicon-96x96.png?v=${PAGE.VERSION}`} />
    <link rel="icon" type="image/png" sizes="16x16" href={`/favicon/favicon-16x16.png?v=${PAGE.VERSION}`} />
    <link rel="manifest" href={`/favicon/manifest.json?v=${PAGE.VERSION}`} />
    <meta name="msapplication-TileColor" content={ THEME.COLOR } />
    <meta name="msapplication-TileImage" content={`/favicon/ms-icon-144x144.png?v=${PAGE.VERSION}`} />
    <meta name="theme-color" content={ THEME.COLOR } />
    <link rel="icon" type="image/x-icon" href={`/favicon/favicon.ico?v=${PAGE.VERSION}`} />
    <link rel="shortcut icon" type="image/x-icon" href={`/favicon/favicon.ico?v=${PAGE.VERSION}`} />
  </>
}

export default Favicon;