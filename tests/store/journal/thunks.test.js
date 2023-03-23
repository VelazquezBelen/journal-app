import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../../src/firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote } from '../../../src/store/journal/journalSlice';
import { startNewNote } from '../../../src/store/journal/thunks';

describe('Pruebas en Journal Thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();
    jest.setTimeout(6000);    
    beforeEach(() => jest.clearAllMocks());
    
    test('startNewNote debe de crear una nueva nota en blanco', async() => {
       
        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid } });

        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
        }));

        
        // Borrar de firebase
        const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );
        const docs = await getDocs(collectionRef);

        
        const deletePromises = [];
        docs.forEach( doc => deletePromises.push(deleteDoc(doc.ref)));
        
        // Elimina todas las entradas de la colección
        await Promise.all(deletePromises);
    });

    test('startSaveNote', () => {

    });

    test('startUploadingFiles', () => {

    });

    test('startDeletingNote', () => {

    });
});