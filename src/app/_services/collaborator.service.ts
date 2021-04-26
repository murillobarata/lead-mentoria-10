import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Collaborator } from '../_models/collaborator';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor() { }

  getCollaborators(): Observable<Collaborator[]> {
    setTimeout(() => {

    }, 5000);
    const qt = 30;
    let collaborators: Collaborator[] = [];

    for(let i = 0; i < qt; i++) {
      const newCollaborator = new Collaborator();
      newCollaborator.name = 'Murillo';
      newCollaborator.function = 'Desenvolvedor';
      newCollaborator.team = 'Fábrica de Software';
      newCollaborator.years = 1;
      newCollaborator.months = 6;

      collaborators.push(newCollaborator);
    }

    const response = of(collaborators);
    return response;
  }

}
