import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  length = 0
  password = ''
  isLetters = false
  isNumbers = false
  isSymbols = false

  onChangeLength(event: Event) {
    let {value} = event.target as HTMLInputElement    
    const number = parseInt(value)

    if(!isNaN(number)) {
      this.length = number
    }

    console.log('Length: ', this.length)
  }

  useLetters() {
    this.isLetters = !this.isLetters
  }
  useNumbers() {
    this.isNumbers = !this.isNumbers
  }
  useSymbols() {
    this.isSymbols = !this.isSymbols
  }

  submit() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const numbers = '123456789'
    const symbols = '!@#$%^&*()'

    let passCharacters = ''
    if(this.isLetters) {
      passCharacters += letters
    }
    if(this.isNumbers) {
      passCharacters += numbers
    }
    if(this.isSymbols) {
      passCharacters += symbols
    }

    let generatePassword = ''
    for(let i=0;i<this.length;i++) {
      const index = Math.floor(Math.random() * passCharacters.length)
      generatePassword += passCharacters[index]
    }

    this.password = generatePassword

  }

}
