# useAxios custom hook

## Usage:

method can be any axios method
headers and body are optional
url can be derived from an object that returns the path or from BASE_URL + endpoint

ex: 
```
axios.defaults.baseURL = "https://some.url/api"

...

const { response, loading, error } = useAxios({
        method: 'post',
        url: '/posts',
        headers: JSON.stringify({ accept: '*/*' }),
        body: JSON.stringify({
            userId: 1,
            id: 19392,
            title: 'title',
            body: 'Sample text',
        }),
    });
```

or:

in separate file (`/constants/index` for example):
```
const base_url = https://some.url/api"

const BASE_URL = {
    endpoint: \`${base_url}/endpoint\`,
    anotherEndpoint: \`${base_url/anotherEndpoint}\`
}

export default BASE_URL;
```
then in your hook call:
```
import BASE_URL from "../path/to/file";

...

const { response, loading, error } = useAxios({
        method: 'post',
        url: BASE_URL.anotherEndpoint,
        headers: JSON.stringify({ accept: '*/*' }),
        body: JSON.stringify({
            userId: 1,
            id: 19392,
            title: 'title',
            body: 'Sample text',
        }),
    });
```