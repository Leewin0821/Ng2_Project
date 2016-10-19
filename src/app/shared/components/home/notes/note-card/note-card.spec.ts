import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoteCard } from './index';
import { By } from '@angular/platform-browser';

@Component( {
  template: '<note-card [note]="note" (checked)="onChecked($event)"></note-card>'
} )
class TestComponent {
  newNote: {
    title: string,
    content: string,
    color: string
  };
  note = {
    title: 'test title',
    content: 'test content'
  };

  onChecked( note ) {
    this.newNote = note;
  }
}

describe( 'NoteCard', () => {

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [
        TestComponent,
        NoteCard
      ],
    } );
  } );

  it( 'the component should have a title', async( () => {
    let fixture = TestBed.createComponent( TestComponent );
    fixture.detectChanges();
    const el = fixture.debugElement.query( By.css( '.title' ) );
    expect( el.nativeElement.textContent.trim() ).toBe( 'test title' );
  } ) );

  it( 'the component will change when click the check', async( () => {
    let fixture = TestBed.createComponent( TestComponent );
    fixture.detectChanges();
    const testComponent: TestComponent = fixture.componentInstance;
    const el = fixture.debugElement.query( By.css( '.icon' ) );

    el.triggerEventHandler( 'click', null );
    expect( testComponent.newNote.title ).toBe( 'test title' );
  } ) );

} );
