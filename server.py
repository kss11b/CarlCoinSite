from flask import Flask, render_template, request, redirect, session, flash
import os, binascii, hashlib
from flask_bcrypt import Bcrypt
app = Flask(__name__)
app.secret_key = 'shushmans'


@app.route('/')
def index():
    return render_template("index.html")


app.run(debug=True)
