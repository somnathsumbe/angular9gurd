import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../book/book';
import { Books } from './books';

export class Testdata implements InMemoryDbService {
    createDb() {

        let bookDetails: Books[] = [
            { id: 101, name: 'Angular', category: 'Angular book' },
            { id: 102, name: 'Reactjs', category: 'Reactjs book' },
            { id: 103, name: 'TypeScript', category: 'TypeScript book' },
        ]
        return { mybooks:bookDetails }

    }
}
