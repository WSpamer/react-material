import { useEffect, useState } from "react";


interface Props {
  url: string
  
}


export const useFetch = (url: string) => {
  const [state, setState] = useState({data: null, loading: true});

  useEffect(() => {
      setState(state => ({data: state.data, loading: false}));
      fetch(url).then(res => res.json()).then(data => {
      setState({data: data, loading: false});
    });
  }, [url,setState])

  return state
};
