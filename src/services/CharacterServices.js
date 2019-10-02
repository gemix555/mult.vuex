import http from '@/api';
import{ SHOW } from '@/api/routes';

export const fetchCharacters = () => {
    return http.get(SHOW.CHARACTERS);
};

// export const fetchProfile = (id) => {
//     return http.get(SHOW.CHARACTER(id));
// };