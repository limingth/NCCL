# example 
# $ make Lesson-1
# $ make Lesson-2

%: 
	make md
	-rm outline.tex talk.tex
	echo building $@ outline md files from README.md
	pandoc -t beamer --slide-level 2 $@-outline.md -o outline.tex
	grep -r "###" ../Unit-1/$@.md -A 100 > $@-talk.md
	pandoc -t beamer --slide-level 3 $@-talk.md -o talk.tex
	sleep 1
	xelatex main.tex
	mv main.pdf $@.pdf
	gnome-open $@.pdf

md:
	grep -r Lesson-1.md ../Unit-1/README.md -A 13 > Lesson-1-outline.md
	grep -r Lesson-2.md ../Unit-1/README.md -A 16 > Lesson-2-outline.md
	grep -r Lesson-3.md ../Unit-1/README.md -A 9 > Lesson-3-outline.md
	grep -r Lesson-4.md ../Unit-1/README.md -A 8 > Lesson-4-outline.md
	grep -r Lesson-5.md ../Unit-1/README.md -A 12 > Lesson-5-outline.md
	grep -r Lesson-6.md ../Unit-1/README.md -A 8 > Lesson-6-outline.md
	grep -r Lesson-7.md ../Unit-1/README.md -A 9 > Lesson-7-outline.md
	grep -r Lesson-8.md ../Unit-1/README.md -A 9 > Lesson-8-outline.md
	grep -r Lesson-9.md ../Unit-1/README.md -A 6 > Lesson-9-outline.md
	grep -r Lesson-10.md ../Unit-1/README.md -A 9 > Lesson-10-outline.md
	grep -r Lesson-11.md ../Unit-1/README.md -A 11 > Lesson-11-outline.md
	grep -r Lesson-12.md ../Unit-1/README.md -A 8 > Lesson-12-outline.md
	grep -r Lesson-13.md ../Unit-1/README.md -A 10 > Lesson-13-outline.md

clean:
	rm *.out *.log *.nav *.toc *.vrb *.aux *.snm 
	rm Lesson*.md
