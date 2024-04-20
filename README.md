# pinata_app
Simple pinata app



### HOW TO

### Create your container

Generate the image;
```bash
sudo docker build -t cont_pin .
```

```bash
sudo docker run -it -v /PathToMyProject/:/workspace --name cont_pbv img_pbv
```


a simple flask server has been set up to check interraction:

if flask is not installed

```bash
pip install flask
```

```bash
python3 pyServer.py
```

