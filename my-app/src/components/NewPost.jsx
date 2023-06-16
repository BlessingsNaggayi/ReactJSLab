const NewPost = () => {
    const titleRef = useRef();
    const authorRef = useRef();
    const contentRef = useRef();
  
    const handleSubmit =  async(event) => {
      event.preventDefault();

      const newPost = {
        title: titleRef.current.value,
        author: authorRef.current.value,
        content: contentRef.current.value,
      };
      
      try {
        const response = await axios.post('http://localhost:8080/api/v1/posts', newPost);
        console.log('New post created:', response.data);
        titleRef.current.value = '';
        authorRef.current.value = '';
       contentRef.current.value = '';

      }catch (error) {
        console.error('Error creating new post:', error);
        
      }

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>New Post</h2>
        <input type="text" placeholder="Title" ref={titleRef} />
        <input type="text" placeholder="Author" ref={authorRef} />
        <textarea placeholder="Content" ref={contentRef} />
        <button type="submit">Submit</button>
      </form>
    );
  };