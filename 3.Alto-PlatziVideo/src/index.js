import React from 'react';
import ReactDOM from 'react-dom';

/**
 * El provider, nos sirve para comunicar nuestra aplicación(componentes) y tengan el mismo estado
 */
 import { Provider } from 'react-redux'

/**
 * Crea el almacenamiento del estado.
*/
import { createStore } from 'redux';

/**
 * Reducer
 */
import reducer from './reducers';

/**
 * Route
 */
import Home from './routes/App';

const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "trends": [],
    "originals": [
        {
            "id": 8,
            "slug": "tvshow-8",
            "title": "Stargate Atlantis",
            "type": "Action",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 148,
            "cover": "http://dummyimage.com/800x600.png/306880/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 9,
            "slug": "tvshow-9",
            "title": "Alien Highway",
            "type": "Action",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 128,
            "cover": "http://dummyimage.com/800x600.png/604180/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 10,
            "slug": "tvshow-10",
            "title": "Elementary",
            "type": "Animation",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 346,
            "cover": "http://dummyimage.com/800x600.png/FF91BA/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 11,
            "slug": "tvshow-11",
            "title": "Strange Angel",
            "type": "War",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 226,
            "cover": "http://dummyimage.com/800x600.png/45807C/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 12,
            "slug": "tvshow-12",
            "title": "Private Eyes",
            "type": "Comedy",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 190,
            "cover": "http://dummyimage.com/800x600.png/577380/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 13,
            "slug": "tvshow-13",
            "title": "NCIS: Los Angeles",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 160,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        }
    ]
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('app')
);