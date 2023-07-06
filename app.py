from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')

def home():
    return render_template('home.html')

@app.route('/reachableDFS/')

def reachableDFS(): 
    return render_template('reachableDFS.html')

@app.route('/shortestlengthpath/')

def shortestlengthpath():
    return render_template('shortestlengthpath.html')

@app.route('/dijkstra')

def dijkstra():
    return render_template('dijkstra.html')

if __name__ == '__main__': 
    app.run(host ="127.0.0.1", port =8080, debug=True)