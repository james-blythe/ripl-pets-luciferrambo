import os
import sys
import tinify
# tinify.key = os.environ["TINIFY_KEY"]
tinify.key = "Zlk4MjJnSRsNnpWLX2b4jp9mH3bgGS2Q"
filename = sys.argv[1]
source = tinify.from_file(filename)
print(source)
resized = source.resize(method="scale", width=640)
print(resized)
resized.to_file(filename)