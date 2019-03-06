#!/bash/sh
file=$1;
designation=$2;
if [ $# -ne 2 ]
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
                grep -i $designation $file | awk '{print $0}' | 
				awk -F"," -v pos="$designation" 'BEGIN{count=0;average=0;}{if($2==pos){average+=$3;count++;}}END{if(count==0){printf("Error.")}else{printf("%.2f",average/count);}}'
            else
                echo "Input file does not have read permission"
                exit 
			fi
        fi
	fi
fi
