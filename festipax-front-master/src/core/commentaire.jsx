import axios from 'axios';
import React from 'react';
import backendHostname from '../helpers/getBackendHostname';

// todo -1 degager la gestion des commentaires dans accueil (tu peux commenter pour les etapes suivantes)
// TODO transformer function component to React.component +++++++++++++++++++++BOOOM DOWN BITCH++++++++++++++++++++++++++++
// TODO1 ajouter un state avec les commentaires (tableau vide)
// TODO2 ajouter une fonction componentDidMount qui va recuperer les commentaires
// TODO3 mettre les commentaires dans le state de l'étape TODO1
// TODO4 ajouter un champ text et un button, quand on clique sur le button ça doit console.log le contenu du champ text (recuperer valeur champ text en react)

//fait: connecter le backend à la db
//fait: afficher ce qu'il y a dans la db sur le front
//par contre => impossible d'afficher si le back tourne sur docker??

export default class Commentaire extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', message: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeMessage = this.handleChangeMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) { this.setState({ value: event.target.value }) }
    handleChangeMessage(event) { this.setState({ message: event.target.value }) }

    handleSubmit(event) {
        if (this.state.value === '' || this.state.message === '') {
            alert('veuillez remplir tous les champs')
        } else {
            axios.post(`${backendHostname}/insert`, {
                name: this.state.value,
                comment: this.state.message
            }).then(() => {
                alert('le commentaire a bien été soumis ')
                this.setState({ message: '' })
            }).catch(() => {
                alert('une erreur est survenue ')
            })
        }
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom :
              <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
                <label>
                    Message :
              <input type="textarea" value={this.state.message} onChange={this.handleChangeMessage} /></label>
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}