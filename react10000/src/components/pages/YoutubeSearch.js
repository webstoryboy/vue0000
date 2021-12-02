import React, { useRef } from "react";

function YoutubeSearch({ search, setState }) {
  console.log(setState);
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    setState(value)
  };

  const onClick = (e) => {
    e.preventDefult();
    //console.log("onclick");
    handleSearch();
  };
  const onKeyPress = (event) => {
    //console.log("onKeyPress");
    event.preventDefult();
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="youtube__search">
      <h2>검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        placeholder="검색하세요."
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </div>
  );
}

export default YoutubeSearch;
