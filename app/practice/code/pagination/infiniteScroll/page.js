'use client'
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

function InfinitePagination({ searchParams }) {
  const [images, setImages] = useState([]);
  const router = useRouter();
  const [page, setPage] = useState(() => {
    if (searchParams?.page ) {
      return searchParams.page;
    } else {
      return 1;
    }
  });

  useEffect(() => {
    const getPhotos = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=5`
      );
      const data = await res.json();

          setImages((prev) => searchParams.page == 1 ? data : [...prev, ...data]);
      
    };

    router.push(`/practice/pagination/infiniteScroll?page=${page}`);
    getPhotos();
  }, [page]);



  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (clientHeight + scrollTop > scrollHeight) {
        window.scrollTo(0 , clientHeight)
      nextHandler();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

  }, []);

  const nextHandler = () => {
    setPage((prevPage) => +prevPage + 1);
    router.push(`/practice/pagination/infiniteScroll?page=${page}`);
  };


  const prevHandler = () => {
    if(page >= 1){
        setPage((prevPage) => +prevPage - 1);
        router.push(`/practice/pagination/infiniteScroll?page=${page}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "auto",
      }}
    >
      {images.map((item) => (
        <>
        <img key={item.id} src={item.url} alt={`Image ${item.id}`} />
        <p>{item.id}</p>
        </>
      ))}

      <div
        style={{
          marginBottom: "50px",
          display: "flex",
          gap: "20px",
          borderRadius: "5px",
        }}
      >
        <button onClick={nextHandler}>Next</button>
        <button onClick={prevHandler}>Prev</button>
      </div>
    </div>
  );
}

export default InfinitePagination;