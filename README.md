Project target: Search for movies in a database (sidebar search) and show extended details on the movie's page

Unppack and call npm install and npm run start

The context of available options is in App Because that way I can keep the state of that list between changing pages.

Wanted to add the apiKey and basePath to a .env file, got used to it in Next but was unable with normal react app.

The id of selected movie is passed as query params and I decided to name the interface for data provided from BE with 'DTO' because it's easier to know what is FE param and what is received.

Added some nice touch with debouncing in sidebar search...although it looks like overkill in specific movie page

Used // eslint-disable-next-line react-hooks/exhaustive-deps to ignore unused dependencies in useEffect .

Instead of hardcoding the values for pictures sizes, called in the first render the configurations request for pictures.

Could add some image while the ones needed are loading
