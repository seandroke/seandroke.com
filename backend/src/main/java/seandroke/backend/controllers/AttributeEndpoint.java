package seandroke.backend;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import seandroke.backend.AttributeRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/")
public class AttributeEndpoint {
	private final Logger logger = LoggerFactory.getLogger(getClass());

	private final AttributeRepository attributeRepository;

	public AttributeEndpoint(AttributeRepository attributeRepository) {
		this.attributeRepository = attributeRepository;
	}

	@RequestMapping(value = "/Attributes", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:3000")
	public AttributeModel getAllAttributes() {
		return attributeRepository.findFirstByOrderByIdDesc();
	}

	// @RequestMapping(value = "/{id}", method = RequestMethod.GET)
	// public AttributeModel getEmployee(@PathVariable long id) {
	// 	logger.info("Getting Employee with ID: {}.", id);
	// 	Optional<AttributeModel> attributeModel = attributeRepository.findById(id);
	// 	return attributeModel.get();
	// }

	// @RequestMapping(value="/getSection", method = RequestMethod.GET)
	// @CrossOrigin(origins = "*")
	// public List<AttributeModel> getAttributeBySection(@RequestParam("section") String sectionName) {
	// 	List<AttributeModel> attributeModel = attributeRepository.findBySectionName(sectionName);
	// 	return attributeModel;
	// }

	// @RequestMapping(value = "/create", method = RequestMethod.POST)
	// public AttributeModel add(@RequestBody AttributeModel attributeModel) {
	// 	logger.info("Saving Employee.");
	// 	return attributeRepository.save(attributeModel);
	// }
	// @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	// public void delete(@PathVariable Long id) {
	// 	AttributeModel model = attributeRepository.findById(id).get();
	// 	logger.info("Deleting Employee.");
	// 	attributeRepository.delete(model);
	// }
}