import React, { memo, useRef } from 'react';
import styles from './searchHeader.module.css';

const SearchHeader = memo((props) => {
  const inputRef = useRef();

  const handleSearch = () =>{
    const value = inputRef.current.value;
    props.onSearch(value);
  };

  const onClick = () =>{
    handleSearch();
  };

  const onKeyPress = (event) =>{
    if(event.key === 'Enter'){
      handleSearch();
    }
  };

  const categoryClick = (event) => {
    const value = event.currentTarget.dataset.name;
    props.onSearch(value);
  };

  return (
    <header className={styles.header}>
      <a href="www.naver.com" className={styles.logo}>
        <img className={styles.img}src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Premium</h1>
      </a>
      <input 
        className={styles.input}
        type="search"
        placeholder="검색"
        ref={inputRef}
        onKeyPress={onKeyPress}
      />
      <button 
        className={styles.button}
        type="submit"
        onClick={onClick}
      >
        <i className="fas fa-search"></i>
      </button>

      <div className={styles.container}>
        <div className={`${styles.category} ${styles.lol}`} onClick={categoryClick} data-name="react">
        <img src="/images/react.webp" alt="category react"/>
        </div>
        <div className={`${styles.category} ${styles.react}`} onClick={categoryClick} data-name="lol">
          <img src="/images/lol.png" alt="category lol" />
        </div>
        <div className={`${styles.category} ${styles.music}`} onClick={categoryClick} data-name="music">
          <img src="/images/music.png" alt="category music" />
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.profileContent}>
          <img src="/images/profile.jpg" alt="category profile" />
        </div>
      </div>
    </header>
  )
});

export default SearchHeader;