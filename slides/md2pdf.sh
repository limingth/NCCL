set -x
echo $1
make $1
pandoc -t beamer --slide-level 3 ../Unit-1/$1.md -o talk.tex
xelatex main.tex
cp main.pdf $1.pdf
rm main.pdf 
rm *.out *.log *.nav *.toc *.vrb *.aux *.snm 
