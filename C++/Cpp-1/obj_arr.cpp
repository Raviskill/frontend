#include<iostream>
using namespace std;

class COMPLEX{
    int id;
    string name;
    int mark[3];
     int total=0;
     int per=0;

    public:
    
    
   
    void getdata()
    {
        cout<<"enter the id:-"<<endl;
        cin>>id;

        cout<<"enter the name:-"<<endl;
        cin>>name;

        for(int i=0;i<3;i++)
        {
             cout<<"enter the mark:-"<<endl;
        cin>>mark[i];

        total+=mark[i];
        per=total*100/300;

        }
        
       
       
        
    }
    void printdata()
    {
        cout<<"id is:-"<<id<<endl;
        cout<<"name is:-"<<name<<endl;
        for(int i=0;i<3;i++)
        {
             cout<<"the mark is:-"<<mark[i]<<endl;


        }
        cout<<"total is:-"<<total<<endl;
        cout<<"per is:-"<<per<<endl;
       
        
    }
    
    
   
    

};
int  main()
{
  COMPLEX c[3];


  for(int i=0;i<3;i++)
  {
    cout<<"student "<<i+1 << endl;
    c[i].getdata();
    c[i].printdata();

  }  
}

