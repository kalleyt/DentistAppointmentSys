package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.models.Patient;
import com.nbu.projects.dentistappointmentsys.repositories.PatientRepository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PatientController {

    @Autowired
    PatientRepository patientRepository;

    @GetMapping("/patients")
    public List<Patient> getPatients(){
        try {
//            SessionFactory factory = new Configuration().configure()
//                    .buildSessionFactory();
//            Session session = factory.openSession();

            //Add new Employee object
            Patient p1 = new Patient();
            p1.setEmail("mikolp@mail.com");
            p1.setFirstName("ivan");
            p1.setLastName("nujik");
            p1.setPassword("123456");
            //p1.setId(new Long(3));

            patientRepository.save(p1);
            //Save the employee in database
//            session.save(p1);
//
//            session.flush();
//            session.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return patientRepository.findAll();
    }

//    @GetMapping("/user")
//    public List<Patient> saveData(){
//
//
//
//        return patientRepository.findAll();
//    }
}
