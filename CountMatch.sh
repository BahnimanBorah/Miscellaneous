#!/bash/sh
if [ $# -ne 1 ]
then
	echo "Pass appropriate number of command line arguments"
else
	if [ -d $1 ]
	then
		echo "Input file is not an ordinary file"
	else
		if [ ! -e $1 ]
		then
			echo "Input file does not exist"
		else
			if [ -r $1 ]
			then
                count=$(grep -cvE '\S' $1)
                echo $count
            else
                echo "Input file does not have read permission"
                exit
			fi
        fi
	fi
fi
