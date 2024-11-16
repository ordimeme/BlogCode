"use client";

import React, { useState, useEffect } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import SignInModal from '../signInModal/SignInModal'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)
  
  const handleSignIn = (e) => {
    e.preventDefault()
    setShowSignInModal(true)
    setOpen(false)
  }

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    
    if (open || showSignInModal) {
      const scrollY = window.scrollY;
      
      body.style.top = `-${scrollY}px`;
      body.style.position = 'fixed';
      body.style.left = '0';
      body.style.right = '0';
      
      const scrollbarWidth = window.innerWidth - html.clientWidth;
      body.style.paddingRight = `${scrollbarWidth}px`;
      
      return () => {
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        body.style.paddingRight = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [open, showSignInModal]);

  const handleCloseModal = () => {
    const scrollY = document.body.style.top;
    
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.paddingRight = '';
    
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
    setShowSignInModal(false);
  };

  const status = "notauthenticated"

  return (
    <>
      {status === "notauthenticated" ? (
        <>
          <Link href="#" className={styles.link} onClick={handleSignIn}>
            <button className={styles.signIn}>Sign In</button>
          </Link>
          <div 
            className={`${styles.burger} ${open ? styles.active : ""}`} 
            onClick={() => setOpen(!open)}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          {open && (
            <div className={styles.responsiveMenu}>
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>blog</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="#" onClick={handleSignIn}>
                <button className={styles.responsiveMenuSignIn}>Sign In</button>
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      {showSignInModal && (
        <SignInModal onClose={handleCloseModal} />
      )}
    </>
  )
}

export default AuthLinks
