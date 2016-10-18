import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'note-creator',
    template: require('./note-creator.html'),
    styles: [require('./note-creator.css')],
})
export class NoteCreator {
    pickedColor: String = 'white';
    isFocus: boolean = false;
    newNote = {
        title: '',
        value: '',
        color: 'white'
    };

    @Output()
    onCreateNote = new EventEmitter();

    createNote() {
        const {title, value, color} = this.newNote;

        if (!title || !value) {
            return false;
        }

        this.onCreateNote.emit({title, value, color});

        this.newNote = {title: '', value: '', color: 'white'};
        this.pickedColor = 'white';
        return false;
    }

    pickColor(color) {
        this.pickedColor = color;
        this.newNote.color = color;
    }
}
